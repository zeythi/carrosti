import iconLuxury from "../assets/icon-luxury.svg"

export default function Luxuosos() {

  return (

    <section className= "bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg" >

        <img src={iconLuxury} alt= "ícone dos carros de luxo" className= "mb-7" />

        <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7" >Luxuosos</h2>

        <p className= "font-lexend text-offwhite mb-7 lg:mb-20" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>

        <a className= "font-lexend bg-offwhitebg border-offwhitebg text-dark-green block rounded-3xl px-10 py-3 w-fit border-2 hover:bg-dark-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros-de-luxo" target="_blanck" >Ver mais</a>

    </section>

  )
}