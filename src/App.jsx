import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function app() {
   return (
    <main className= "min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justify-center items-center" >
       <section className= "lg:flex max-w-[920px]" >
       <div className= "bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg" >
      <img src={iconSedans} alt= "ícone dos carros sedan" className="mb-7" />

      <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7" >Sedans</h2>

      <p className= "font-lexend text-offwhite mb-7 lg:mb-20" >Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>

      <a className= "font-lexend bg-offwhitebg border-offwhitebg text-orange block rounded-3xl px-10 py-3 w-fit border-2 hover:bg-orange hover:text-offwhitebg" href= "https://www.webmotors.com.br/sedans" target="_blanck" >Ver mais</a>


      </div>

      <div className= "bg-green p-12" >

      <img src={iconSuvs} alt= "ícone dos carros SUV" className= "mb-7" />

      <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7" >SUVs</h2>

      <p className= "font-lexend text-offwhite mb-7 lg:mb-20" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>

      <a className= "font-lexend bg-offwhitebg border-offwhitebg text-green block rounded-3xl px-10 py-3 w-fit border-2 hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs" target="_blanck" >Ver mais</a>

      </div>

      <div className= "bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg" >

      <img src={iconLuxury} alt= "ícone dos carros de luxo" className= "mb-7" />

      <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7" >Luxuosos</h2>

      <p className= "font-lexend text-offwhite mb-7 lg:mb-20" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>

      <a className= "font-lexend bg-offwhitebg border-offwhitebg text-dark-green block rounded-3xl px-10 py-3 w-fit border-2 hover:bg-dark-green hover:text-offwhitebg" href="https://www.webmotors.com.br/carros-de-luxo" target="_blanck" >Ver mais</a>

    </div>


      </section>
    </main>
   )

}