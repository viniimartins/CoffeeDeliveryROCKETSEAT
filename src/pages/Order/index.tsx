import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { InputText } from "../../components/Input/InputText";
import { Container, ContainerAndress, Payment, Andress, ContainerInputs, ContainerCoffee, Coffee, CoffeePrice } from "./style";
import { Select } from "../../components/Select";
import { useCart } from "../../context/Cart/Cart";
import { ButtonPrimary } from "../../components/Buttons/ButtonPrimary";
import { CardCart } from "../../components/Card/Cart";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


type OrderForm = {
    cep: number;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
}


const newOrderFormValidationSchema = zod.object({
    cep: zod.number().min(1, 'CEP Invalido'),
    rua: zod.string().min(1, 'RUA Invalido'),
    numero: zod.number().min(1, 'NUMERO Invalido'),
    complemento: zod.string().min(1, 'COMPLEMENTO Invalido'),
    bairro: zod.string().min(1, 'BAIRRO Invalido'),
    cidade: zod.string().min(1, 'CIDADE Invalido'),
    uf: zod.string().min(1, 'ESTADO Invalido'),
})

export function Order() {
    const { cart } = useCart()


    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<OrderForm>({
        resolver: zodResolver(newOrderFormValidationSchema),
    })

    const [pagamet, setPagamet] = useState('Cartão de crédito')

    const priceCart = cart?.reduce((accum, current) => {
        return accum + (current.price * current.quantity)
    }, 0)


    function handleCreateNewOrder(data: OrderForm) {
        navigate('/Order/Complete', {
            state: {
                address: `${data.rua}, ${data.numero},
                ${data.bairro} - ${data.cidade}, ${data.uf}`,
                forecast: `20 min - 30 min`,
                pagamet
            }
        })
    }

    return (
        <Container onSubmit={handleSubmit(handleCreateNewOrder)}>
            <ContainerAndress >
                <h1>Complete seu pedido</h1>
                <Andress>
                    <div>
                        <h2>Endereço de Entrega</h2>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>

                    <ContainerInputs>
                        <InputText
                            width={12.5}
                            placeholder="CEP"
                            type="number"
                            {...register('cep',
                                {
                                    valueAsNumber: true,
                                    required: true,
                                })}
                        />
                        <InputText
                            width={35}
                            placeholder="Rua"
                            type="text"
                            {...register('rua',
                                {
                                    required: true
                                })}
                        />
                        <div>
                            <InputText
                                width={12.5}
                                placeholder="Numero"
                                type="number"
                                {...register('numero',
                                    {
                                        valueAsNumber: true,
                                        required: true
                                    })}

                            />
                            <InputText
                                width={21.75}
                                placeholder="Complemento"
                                type="text"
                                {...register('complemento',
                                    {
                                        required: false
                                    })}
                            />
                        </div>
                        <div>
                            <InputText
                                width={12.5}
                                placeholder="Bairro"
                                type="text"
                                {...register('bairro',
                                    {
                                        required: true
                                    })}

                            />
                            <InputText
                                width={17.25}
                                placeholder="Cidade"
                                type="text"
                                {...register('cidade',
                                    {
                                        required: true
                                    })}

                            />
                            <InputText
                                width={3.75}
                                type="text"
                                placeholder="UF"
                                {...register('uf',
                                    {
                                        required: true
                                    })}

                            />
                        </div>
                    </ContainerInputs>
                </Andress>

                <Payment>
                    <div>
                        <h2>Pagamento</h2>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                    <div>
                        <Select
                            onSelect={setPagamet}
                            value={pagamet}
                        />
                    </div>
                </Payment>
            </ContainerAndress>


            <ContainerCoffee>
                <h1>Cafés selecionados</h1>
                <Coffee>
                    <div>
                        {cart != null && cart.map(coffee => {
                            return <CardCart
                                key={coffee.id}
                                coffee={coffee}
                            />
                        })}

                    </div>
                    <CoffeePrice>
                        <div>
                            <h2>Total de itens</h2>
                            <span>
                                <p>R$</p>
                                <p>{priceCart}</p>
                            </span>
                        </div>
                        <div>
                            <h2>Entrega</h2>
                            <span>
                                <p>R$</p>
                                <p>3,50</p>
                            </span>
                        </div>
                        <div>
                            <h1>Total</h1>
                            <span>
                                <h3>R$</h3>
                                <h3>{priceCart ? priceCart + 3.5 : 0}</h3>
                            </span>
                        </div>
                    </CoffeePrice>

                    <ButtonPrimary
                    >
                        Confirmar pedido
                    </ButtonPrimary>
                </Coffee>
            </ContainerCoffee>
        </Container>
    )
}