import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
    CreditCardIcon,
    ChartBarIcon,
    StopCircleIcon

} from '@heroicons/react/24/outline'

export default function Cards() {
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
                                € 1000
                            </Typography>
                            <Typography variant="body2" >
                                saldo da suas finaças
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
                                    <StopCircleIcon className='h-6 w-6' /> Ultima Entradas  <span className='pl-2'> € 1000 </span>
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div" className='flex flex-row ml-2 mr-2  items-center'>
                                    <StopCircleIcon className='h-5 w-5' />  Ultima Saídas  <span className='pl-2'> € 200</span>
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );

}