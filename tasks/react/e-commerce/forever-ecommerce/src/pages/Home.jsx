import Hero  from "../sections/Hero"
import ProductsList from "../sections/ProductsList"
import LatestCollections from "../sections/LatestCollections"
function Home() {
    return (
        <>
            <Hero></Hero>
            <LatestCollections></LatestCollections>
        </>
    )
}
console.log('hello from home')
export default Home