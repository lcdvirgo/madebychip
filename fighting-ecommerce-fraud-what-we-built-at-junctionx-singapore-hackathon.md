
# Fighting eCommerce Fraud: What We Built at JunctionX Singapore Hackathon

It has been a while since I’ve been to a hackathon. I always love that hackathon as an avenue to build something quickly within the 48-hour time constraint, the opportunity to sharpen my design skills, and network with fellow hackers. So when my colleague posted on Slack about  [JunctionX Singapore](https://singapore.hackjunction.com/), I signed up!

![](https://miro.medium.com/max/1400/1*NesKciGAKJIDOcXveSnpjA.png)

2 of my colleagues and I were lucky to be selected as part of the 120 participants out of over 190 sign-ups.

But it was off to a rocky start — one of my colleagues bailed last minute; Dheeraj joined with me but he was not feeling well the next day; We only finalized the problem we’re going to tackle on 7:15 PM the next day, with the pressure to hit the deadline in less than 17 hours…

It’s a small world. I bumped into Terry, whom I used to mentor at the  [Selangor Smart City and Future Commerce Hackathon](https://selangorsmartcityhackathon.peatix.com/)  in 2018. I remember both of us stayed up late to solve a bug of the valve not closing properly for his Arduino project. He was looking for a team to join, and I am so glad to have him on the team as he is a talented backend engineer working on embed software.

# Brainstorming and Finalizing Ideas

On Friday evening, we started brainstorming ideas for  [Shopee](https://singapore.hackjunction.com/shopee)  and  [Kaspersky](https://singapore.hackjunction.com/kaspersky)’s track, ranging from reducing churn with a subscription modal for repeat orders, loyalty program, intelligence dashboard for shopping behavior, to making education/help center more engaging and interactive for both buyers and sellers.

![](https://miro.medium.com/max/1400/1*5iO7S_yg8auyz1Ut6bUwpA.png)

On Saturday, we validated project ideas from the consumer experience, payment, security and transportation that we’ve brainstormed with our Shopee mentors. The fraud and security idea hits home, and mentors gave us the following insights:

> “Shopee has experienced a lot of fake user accounts coming from competitors in the past and it hurts Shopee’s business.
> 
> Competitors pretend to be real users who placed a large amount of quantity of orders, then proceed to cancel them.”

— Shopee mentors

Our mentor also mentioned that transportation is a huge issue for delivery companies. For instance,  **there are no postcodes available in rural areas in Indonesia**. So a buyer might input something like “My house is beside this tree.” It might be ridiculous to think that how could someone uses a tree as a landmark, but those who grew up in the same neighborhood would know what the buyer meant. There is also a lack of safe drop points like 7-Eleven for parcel collection in rural areas as well.

So, Dheeraj was exploring another idea to help rural consumers, who technically  [have the most to gain as they do not have access to a wide range of products](https://wearecitizensadvice.org.uk/are-rural-consumers-getting-a-bad-deal-with-parcel-delivery-e8b6a70dd874).  [A report from EY](https://www.ey.com/Publication/vwLUAssets/ey-rural-e-commerce-the-untapped-potential/$FILE/ey-rural-ecommerce-the-untapped-potential.pdf)  estimated that there is a US$10b-12b e-commerce market for rural consumers in the next four years, which is a huge untapped opportunity. As language is the barrier and trust is the key to conversion, Dheeraj was experimenting if rural consumers could “draw” what they want to buy, using  [Google Creative Lab](https://experiments.withgoogle.com/autodraw)’s  [AutoDraw](https://www.autodraw.com/)  API:

![](https://miro.medium.com/max/2560/1*qtTIK9O4oXG_waRAlrWYeQ.jpeg)

![](https://miro.medium.com/max/2560/1*OnQ7HUsXisnLlkJZnqi2TQ.jpeg)

# Framing The Problem

![](https://miro.medium.com/max/1400/1*nnyDgb2wsvRX8rWoCHDx8w.png)

If you google “Shopee fraud”, fraud incidents that are reported by media are mostly consumer-facing and operational. For example,  [fake sellers in Taiwan](http://www.taipeitimes.com/News/taiwan/archives/2017/10/10/2003680070)  and the  [rising eCommerce scams in Singapore](https://www.straitstimes.com/singapore/courts-crime/more-scam-victims-in-first-half-of-2019-especially-for-loan-and-credit-for). But what about the fraud that goes “unreported”? That’s exactly what we tackled over the weekend.

Shopee is already winning in 2 markets that it receives the largest amount of orders — Indonesia and Taiwan.  [StatCounter](http://gs.statcounter.com/#desktop+mobile-comparison-ID-monthly-201409-201508)  reported that in Indonesia,  [more than 70% of internet traffic comes from mobile devices](https://www.notion.so/The-future-of-Ecommerce-53f354692b40454c9d6024bfab3951df#0c0861b99276438fa6c7f28cdb1940dd), and  [Shopee wins in mobile apps with Tokopedia (#2) and Lazada (#3) following behind](https://www.notion.so/The-future-of-Ecommerce-53f354692b40454c9d6024bfab3951df#eac5a693bc4a4eb09a74d1046ef1246f).

![](https://miro.medium.com/max/1224/1*O1rFOsdKUx1RhIit0T541Q.png)

Source:  [https://www.techinasia.com/lazada-vs-sea-whos-top-ecommerce-player-in-southeast-asia](https://www.techinasia.com/lazada-vs-sea-whos-top-ecommerce-player-in-southeast-asia)

In an extremely saturated, aggressive and competitive market like this, dirty business techniques are not uncommon, with  [Uber’s unscrupulous “Hell” program spying on Lyft drivers](https://techcrunch.com/2018/04/19/lyft-drivers-lawsuit-against-uber-over-hell-program-isnt-over/), which resulted in the loss of revenue for Lyft.

## A small percentage would cost a huge loss

Considering that Shopee’s  [Gross Merchandise Value (GMV) is over $10 billion in 2018](https://techcrunch.com/2019/03/05/sea-is-raising-up-to-1-5b-for-its-shopee/), even a small percentage of fraud coming from competitors is $20 million:

> US$10,000,000,000 ¹ x 0.9% ² x 10% ³ = US$20,000,000

¹ Shopee’s GMV in 2018  
² Fraud to eCommerce Sales %/year by  [CyberSource](https://www.practicalecommerce.com/3-reminders-online-payment-fraud-2018)  
³ Estimation based on the total fraud

# The Opportunities: How to Curb Competitors’ Fraud?

1.  **Verifying User Profile  
    **Shopee already has an existing email and mobile OTP verification embed during the sign-up process. We think that the 1st layer of defense is to reduce fake accounts is to strengthen the current verification process by adding more layers on top of it: Valid credit card, shipping address and social media account.
2.  **Positive Reinforcement for Shopping Behaviour  
    **One of the traits to identify highly suspicious account is to  [buy a large quantity of the same product and multiple transactions in a short amount of time](https://www.printful.com/blog/the-basics-of-ecommerce-fraud-what-is-it-and-how-to-manage-it/)  to “hijack” merchants’ listing so that the stock is sold out during sales, which refrains the real customers out there from buying.  
    We think that placing a maximum quota on the stock quantity and total amount for the 1st-time user would reduce fraud. For example, if users promise  _not to cancel_ within the 24-hour period and request a refund, it’s very likely that these are real customers and not fake accounts, and we can provide them 10% OFF for the entire order.  
    Moreover, we can reinforce positive buying behavior: the more users shop, the higher the quota is lifted for placing an order.

# The Solution

By factoring in the number of order, item price and maximum quantity of the item ordered, we can analyze if an account is a valid and loyal customer. Thanks to Terry for coming up with the formula and user flow:

![](https://miro.medium.com/max/1400/1*6JdeVT3-HW0ft2rKhuvk4Q.png)

![](https://miro.medium.com/max/1400/1*vZ8lbe3QnLeaTjIzcyaniw.png)

![](https://miro.medium.com/max/1400/1*odjQJdau-S2z2T50Fztyqg.png)

JS code written for scammer detector:  [https://codepen.io/terry-pang/pen/wvwbozx](https://codepen.io/terry-pang/pen/wvwbozx)

If you shop at Shopee before, you might have noticed that under the  _Quantity_  field, if it says “100 pieces available” and you tried to update to 120, the quantity will be automatically reverted to 100 because that is the maximum allowed. We want to build on top of that existing function to encourage positive shopping behavior — by offering discounts for the entire order if users promise not to cancel within the 24-hour period:

![](https://miro.medium.com/max/1200/1*Z1U5_vLlLrHNYx_YZJSxDw.gif)

For Shopee’s internal fraud team, we want to empower them by providing them the necessary tools to make an informed decision and do what they do best at, and this starts by providing  **real-time fraud threat score** for Shopee site globally:

![](https://miro.medium.com/max/1200/1*SD8d87lUTkOfSL5Hl_VKXQ.gif)

Shopee’s internal fraud team can also track the number, monitor the trends over time and  **audit/review these flagged accounts in real-time**.

![](https://miro.medium.com/max/1400/1*dTRUKVYgDVzhDjGawvH0DA.png)

An organization might employ a network of fraudsters or even outsource them to third-world countries. Physically they are probably in the same location but could be routed through anonymously using VPNs. But by tracking logged-in data such as device IPs, OS, and browsers, it will be easier to  **observe the purchase patterns, spot frauds faster and bust hidden networks of these fraudsters**.

![](https://miro.medium.com/max/1400/1*w3Z-vPnYJvmC_Gw4b8lNow.png)

Combining these three powerful tools together, we built a  **global dashboard**  to protect Shopee from competitors’ fraud:

![](https://miro.medium.com/max/1400/1*c1IrOSkXWYzfAuMtZseWFg.png)

In the previous example, 100 is the default maximum stock quantity that Shopee can allow the 1st-time users to purchase. What if we could allow some flexibility to the maximum quantity, the total amount allowed, and discounts applicable for the 1st-time buyer?  **Fraud Thresholds Tool**  comes in handy here by providing that customization. It could start out as an internal tool at first, but Shopee can roll this out to merchants at Seller Central as well.

![](https://miro.medium.com/max/1400/1*Xs2Te8kUF0kuj2b1BeUnSg.png)

# Potential Future Developments

**More scenarios and use cases  
**Over the 48 hours, we tackled the fraud scenarios coming from competitors, but more use cases can be included for enhancement.

**Machine learning to facilitate Accurate Fraud Predictions  
**By utilizing tools such as  [TensorFlow](https://www.tensorflow.org/), machine learning can help build a better fraud prediction model to help the fraud team to make better decisions.

**Expand comprehensive user profile for other SEA businesses  
**Since data has been collected to build comprehensive user profiles to fight fraud, we thought to expand this to other SEA group’s businesses such as Garena and Digital Financial Services.

# Final Thoughts

When the deadline hits at 12 noon on Sunday, I was still working on the slides. When Dheeraj submitted our entry, I feel so relieved with a sense of accomplishment of what we’ve built. There were moments we almost give up, but what I learned is although our resources and time are strained,  **we need to work with what we have**.

During the brainstorming phase, Terry suggested that we can use board games to educate Shopee users. His two favorite board games are  [Catan](https://www.catan.com/)  and  [CASHFLOW by Robert Kiyosaki](https://www.amazon.com/CASHFLOW-Board-Exclusive-Strategy-Delivered/dp/B00M085AMI). It doesn’t make sense at first, but when we validate with our mentors, it is actually a great idea to use interactive games to educate buyers and sellers. I learned that brainstorming is the best phase to go wild and crazy instead of killing creativity, and embracing these ideas with an open mind is key.  **Don’t aspire to be the smartest person in the room, and** [**leave your ego at the door**](https://uxdesign.cc/designing-at-google-10-things-i-know-to-be-true-e033d97e5f13)**.**

And yes, I need to  **learn Principle or Flinto**  to animate my prototype!

# Team

**Dheeraj Joshi**  — Front-end |  [Twitter](https://twitter.com/dheerajhere)  
**Terry Pang**  — Backend |  [LinkedIn](https://www.linkedin.com/in/terry-pang-9058049a/)  
**Chip Dong Lim**  — Design |  [Portfolio](http://madebychip.com/)  /  [LinkedIn](https://www.linkedin.com/in/chipdonglim/)  /  [Twitter](https://twitter.com/lcdvirgo)

![](https://miro.medium.com/max/1400/1*THc4WsbRgcdZBNbRMUkdNQ.png)

## Thanks for making it to the end of this journal! Are you enjoying reading it? What are other awesome ideas that you might have thought of to solve for an eCommerce platform?

## Let me know by commenting below ⇣ or  [sending me a tweet on Twitter](https://twitter.com/lcdvirgo)  🐦 and I’d be excited to join the conversation. You can  [view the 6 final pitches I’ve compiled](https://twitter.com/i/moments/1178901233412628485)  as well. Thanks for hitting the 💚 if you enjoyed this article!

[_Chip Dong Lim_](http://twitter.com/lcdvirgo) _is a product designer at_ [_TradeGecko_](https://www.tradegecko.com/) [](http://carinmed.com/) — a beautiful inventory software that powers the world’s small and medium businesses and connects the global supply chain.  _View more of his past design work at_ [_madebychip.com_](http://madebychip.com/).