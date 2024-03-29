import iconSedans from "../assets/icon-sedans.svg"

export default function Sedans() {

  return (

    <div className= "bg-orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg" >

        <img src={iconSedans} alt= "ícone dos carros sedan" className="mb-7" />

        <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7" >Sedans</h2>

        <p className= "font-lexend text-offwhite mb-7 lg:mb-20" >Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>

        <a className= "font-lexend bg-offwhitebg border-offwhitebg text-orange block rounded-3xl px-10 py-3 w-fit border-2 hover:bg-orange hover:text-offwhitebg" href= "https://www.webmotors.com.br/sedans" target="_blanck" >Ver mais</a>

    </div>

  )
}