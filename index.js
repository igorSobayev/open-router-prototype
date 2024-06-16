import express from 'express'
import OpenAI from "openai"

import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 8080

app.get('/', async (req, res) => {


    const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
    // defaultHeaders: {
    //   "HTTP-Referer": $YOUR_SITE_URL, // Optional, for including your app on openrouter.ai rankings.
    //   "X-Title": $YOUR_SITE_NAME, // Optional. Shows in rankings on openrouter.ai.
    // },
    // dangerouslyAllowBrowser: true,
    })
    async function main() {
    const completion = await openai.chat.completions.create({
        model: "openai/gpt-3.5-turbo",
        messages: [
        { role: "user", content: "What is the meaning of life" }
        ],
    })
    
    console.log(completion.choices[0].message)
    }

    main()
    
    res.send('Hello World!')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

