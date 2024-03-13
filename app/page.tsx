

import Image from "next/image";
import styles from "@/styles/index.module.css"

//import Head from 'next/head';
//import Counter from "@/app/components/Counter";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-3xl font-bold mb-4 text-purple-500" style={{ filter: 'brightness(150%)' }}>Giovani Valdes</h1>
      <div className="mt-16 w-full flex justify-center">
        <div className="w-3/5 flex flex-col justify-center items-center">
          <Image
            src="https://bajajmatriz.com/wp-content/uploads/2023/01/Captura-de-Pantalla-2023-01-18-a-las-10.15.50.png" // Reemplaza esto con la URL de tu imagen
            alt="PULSAR" // Reemplaza esto con una descripción de la imagen
            width={500}
            height={300}
            className="rounded-lg"
            unoptimized // Asegúrate de agregar esta propiedad cuando uses imágenes de Internet
          />
          <p className="mt-4 text-white text-lg">PULSAR N250</p>
        </div>
      </div>
      
    </main>
  );
}