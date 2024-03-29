import iconSuvs from "../assets/icon-suvs.svg"

export default function Suvs() {

  return (

    <div className= "bg-green p-12" >

        <img src={iconSuvs} alt= "ícone dos carros SUV" className= "mb-7" />

        <h2 className= "font-shoulders uppercase text-4xl font-bold text-offwhitebg mb-7" >SUVs</h2>

        <p className= "font-lexend text-offwhite mb-7 lg:mb-20" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>

        <a className= "font-lexend bg-offwhitebg border-offwhitebg text-green block rounded-3xl px-10 py-3 w-fit border-2 hover:bg-green hover:text-offwhitebg" href="https://www.webmotors.com.br/suvs" target="_blanck" >Ver mais</a>

    </div>

  )
}