import Header from './Header'
import Card from './Card'
import ImageBox from './ImageBox'
import ApplyCard from './ApplyCard'
import Footer from './Footer'

import './css/general.css'
import './css/colors.css'
import './css/fonts.css'
import './css/mobile/image-box.css'

import imageFounder from './assets/images/image-founder.webp'

export default function App() {
    return <>
        <Header />
        <section id="card-collection">
            <Card cardNumber="1" title="Actionable insights" paragraph="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."></Card>
            <Card cardNumber="2" title="Data-driven decisions" paragraph="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."></Card>
            <Card cardNumber="3" title="Always affordable" paragraph="Always affordable pricing that scales with your business. Get top-quality product data
          analytics services without hidden costs or unexpected fees."></Card>
        </section>
        <section id="apply-section">
            <ImageBox src={imageFounder} />
            <ApplyCard title="Be the first to test" paragraph="Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call."/>
        </section>
        <Footer />
    </>
}