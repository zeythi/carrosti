import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"


export default function app() {
   return (
    <main className=" min-h-svh bg-offwhitebg py-20 px-6">
      <section>
      <div className= "bg-orange p-12 rounded-t-lg" >
      <img src={iconSedans} alt= "ícone dos carros sedan" className="mb-7" />

        <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7 " >Sedans</h2>

        <p className= "font-lexend mb-7" >Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>

        <a className= "font-lexend" href="https://www.webmotors.com.br/sedans" target="_blanck" >Ver mais</a>


      </div>

      <div className= "bg-green p-12" >

      <img src={iconSuvs} alt= "ícone dos carros SUV" className= "mb-7" />

      <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7" >SUVs</h2>

      <p className= "font-lexend mb-7" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>

      <a className= "font-lexend" href="https://www.webmotors.com.br/suvs" target="_blanck" >Ver mais</a>

      </div>

      <div className= "bg-dark-green p-12 rounded-b-lg" >

      <img src={iconLuxury} alt= "ícone dos carros de luxo" className= "mb-7" />

      <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7" >Luxuosos</h2>

      <p className= "font-lexend mb-7" >Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>

      <a className= "font-lexend" href="https://www.webmotors.com.br/carros-de-luxo" target="_blanck" >Ver mais</a>

    </div>


      </section>
    </main>
   )

}