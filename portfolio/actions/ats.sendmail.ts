"use server"

import { QuoteFormData } from "@/app/components/QuoteRequestForm";
import { sendContributeEmail } from "@/utils/mail";

export async function sendMailAction(action: QuoteFormData) {
    try{ 
        await sendContributeEmail ( action)
        return{success: "message sent"}

    }catch(error){
        return{error: "something went wrong"}
    }
}
