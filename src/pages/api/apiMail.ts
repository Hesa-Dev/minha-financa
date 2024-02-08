
import { Resend } from "resend";
import mail from '@/emails/mail'
import template, { SlackConfirmEmail } from '@/emails/template'

import { NextResponse } from "next/server";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST(response : Response) {

    try {
      
      const data = await  resend.emails.send({
            from: `${process.env.EMAIL_FROM}`,
            to: 'hsilva@hesasoft.com',
            subject: 'Hello World',
            react: template({validationCode: "code validation"})
        });

        // console.log(data)
        return NextResponse.json({data})

    } catch (error) {

        // console.log("erro no envio de email", error)
        return NextResponse.json({error})
    }

}