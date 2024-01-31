import express from 'express';

const app = express();


app.get('/teste', async(request, response)=>{
    // return video;
    return response.status(201).send()
})

app.listen(3333, () => console.log("Online Server "))