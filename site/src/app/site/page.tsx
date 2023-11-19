'use client'

import React, { useState, FormEvent } from 'react'


/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-async-client-component */

async function getProdutos() {
    const res = await fetch('http://localhost/api/produtos', {
        // next: {
        //     revalidate: 30
        // }
    })
    return res.json()
  }



export default async function Site() {
        const  produtos = await getProdutos();
       // const produtos = await Promise.all([produtosData]);


    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //setIsLoading(true)
      //   const router = useRouter();
        let jsonObject = { nome: null, celular: null, telefone: null, cpf: null, quantidade: null, produto_id: null };
        try {
            const formData = new FormData(event.currentTarget)
            formData.forEach((value, key) => {
                jsonObject[key] = value;
            });

            const response = await fetch('http://localhost/api/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonObject),
            })

            if (response.ok) {
                const data = await response.json(); // Se a resposta também for JSON
                console.log('Resposta:', data);
               
            //    router.push(`/`);
            } else {
                throw new Error('Failed to submit the data. Please try again.')
            }
        } catch (error: any) {
            // Capture the error message to display to the user
            console.error(error)
        } finally {
           // setIsLoading(false)
        }

    }
    //https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations
    return (

        <main>
            <form method="POST" onSubmit={onSubmit}>
                <input type="text" name="nome" />
                <input type="text" name="telefone" />
                <input type="text" name="celular" />
                <input type="text" name="cpf" />
                { <select name="produto_id" >
                    <option value="">Selecione um produto</option>
                    {produtos.data.map((produto: any) => (
                        <option key={produto.id} value={produto.id}>
                            {produto.nome}
                        </option>
                    ))}
                </select> }
                <input type="number" name="quantidade" />
                <button type="submit">
                  Salvar
                </button>
                {/* <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Salvando...' : 'Salvar'}
                </button> */}
            </form>
        </main>
    )
}
