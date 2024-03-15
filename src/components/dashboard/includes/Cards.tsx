import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
    useState,
    useContext,
    useEffect,
} from 'react';

import {
    CreditCardIcon,
    ChartBarIcon,
    StopCircleIcon
} from '@heroicons/react/24/outline'
import { api } from "@/services/apiClient";

export default function Cards() {

    const [saldo, setSaldo] = useState<any>();
    const [lastCredito, setLastCredito] = useState<any>();
    const [lastDebito, setLastDebito] = useState<any>();

    async function loadSaldo() {

        api.get('/finance/last/saldo', {
        })
            .then(response => {
                
                const {saldo} = response.data
                console.log("movimentos-saldo : ", saldo)
                setSaldo(saldo)
            }).

            catch((error) => {
                console.log("error:. ", error)
            })
    }

    async function lastDbt() {

        const tipo: any = "debito"

        api.get('/finance/last/movimento/', {
            params: {
                // tipo: "credito"
                tipo: tipo
            }
        }).then(function (resp){

            const {montante} = resp.data
            console.log("movimentos-debito :", montante)
            setLastDebito(montante)

        }).  catch((error) => {
            console.log("error:. ", error)
        }) 
          
    }

    async function lastCrd() {

        const tipo: any = "credito"

        api.get('/finance/last/movimento/', {
            params: {
                // tipo: "credito"
                tipo: tipo
            }
        })
        .then(response => {
               
                const {montante} = response.data
                console.log("movimentos-credito :", montante)
                setLastCredito(montante)
         }).

        catch((error) => {
                console.log("error:. ", error)
         })

    }

    useEffect(() => {
        loadSaldo()
        lastCrd()
        lastDbt()
    }, [])
    return (

        <div className='flex'>
            <div className='flex-auto w-4  ml-2 mr-3'>
                <Card className='bg-indigo-600 text-white font-extrabold rounded-md' >
                    <CardActionArea>
                        <div className='gap-2 grid-col  ml-2'>
                            <CreditCardIcon className=" h-12 w-12 mt-3" aria-hidden="true" />
                            Saldo
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               € {saldo ? saldo : "0"}
                            </Typography>
                            <Typography variant="body2" >
                                saldo atual das finanças
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div className='flex-auto w-4 mr-3'>
                <Card className='bg-indigo-600 text-white font-extrabold rounded-md' >
                    <CardActionArea>
                        <div className='gap-2 grid-col  ml-2'>
                            {/* <CreditCardIcon className=" h-12 w-12" aria-hidden="true" /> */}
                            <ChartBarIcon className="h-12 w-12  mr-4 mt-3" aria-hidden="true" />
                            Movimentos
                        </div>
                        <CardContent>
                            <div className='flex  flex-col items-start'>
                                <Typography gutterBottom variant="h6" component="div" className='ml-2 mr-2 flex flex-row items-center'>
                                    <StopCircleIcon className='h-6 w-6' /> 
                                    Ultima Entrada  
                                    <span className='pl-2'> €  {lastCredito ? lastCredito : "0"} </span>
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div" className='flex flex-row ml-2 mr-2  items-center'>
                                    <StopCircleIcon className='h-5 w-5' />  
                                    Ultima Saída  
                                    <span className='pl-2'> € {lastDebito? lastDebito : "0"} </span>
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );

}