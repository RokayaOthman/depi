import Hero  from "../sections/Hero"
import ProductsList from "../sections/ProductsList"
import LatestCollections from "../sections/LatestCollections"
import BestSellers from "../sections/BestSellers"
function Home() {
    return (
        <>
            <Hero></Hero>
            <LatestCollections></LatestCollections>
            <BestSellers></BestSellers>

        </>
    )
}
console.log('hello from home')
export default Home