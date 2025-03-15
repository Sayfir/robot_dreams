import { expect } from 'chai';
import * as path from 'path';
import { PetService } from 'src/services/pet.service';
import { PactV3, MatchersV3, Verifier } from '@pact-foundation/pact';
import { OrderDto } from '../src/models/order.dto';

describe('Pact pet service tests', () => {
    let petService: PetService;

    const provider = new PactV3({
        consumer: 'PetStore-consumer-v3',
        provider: 'PetStore-provider-v3'
    });

    const orderExample: OrderDto = {
        id: 1001,
        petId: 1001,
        quantity: 1,
        shipDate: '2025-03-15T10:00:15.679Z',
        status: 'placed',
        complete: true
    };

    const EXPECTED_BODY = MatchersV3.like(orderExample);
    describe('Place an order and get the order details', () => {
        it('Returns the placed order', () => {
            provider
                .given('Order interaction')
                .uponReceiving('Place an order')
                .withRequest({
                    method: 'POST',
                    path: '/v2/store/order',
                    body: orderExample,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                })
                .uponReceiving('Get an order')
                .withRequest({
                    method: 'GET',
                    path: '/v2/store/order/1001'
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                });

            return provider.executeTest(async (mockserver: { url: string }) => {
                petService = new PetService(mockserver.url);
                const responsePost = await petService.placePetOrder(orderExample);
                const response = await petService.getPetOrder('1001');

                expect(responsePost).to.deep.eq(orderExample);
                expect(response).to.deep.eq(orderExample);
            });
        });
    });
});

describe('PactV3 PetStore Provider Verification', () => {
    it('validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), 'pacts/PetStore-consumer-v3-PetStore-provider-v3.json')]
        }).verifyProvider();
    });
});
