import Card from './Card'

//../../../public/newimg/newtenis1.jpeg

const Container = () => {

    const Snks1 = {
        url: '/newimg/newtenis1.jpeg',
        nome:'Tênis Fila Nest',
        descricao: 'Calçado tipo tênis running, apropriado para caminhadas, corridas leves.',
        price: 159.90
    }
    const Snks2 = {
        url:'/newimg/newtenis2.jpeg',
        nome:'Tênis Olympikus Cygnus',
        descricao: 'O Olympikus Cygnus é o tênis ideal para quem busca conforto para as caminhadas. Seu solado possui a tecnologia de amortecimento Evasense, que proporciona leveza, maciez e maior flexibilidade para as atividades diárias. ',
        price: 289.90
    }
    const Snks3 = {
        url:'/newimg/newtenis3.jpeg',
        nome:'Tênis Adidas Masculino Grand Court 2.0',
        descricao: 'Inspirado nos anos 70, o Tênis Adidas Masculino Grand Court Base 2.0 possui estilo tradicional e as três listras dispensam comentários comprovando sua autenticidade.',
        price: 304.90
    }
    const Snks4 = {
        url:'/newimg/newtenis4.jpeg',
        nome:'Tênis adidas Runfalcon 2.0,',
        descricao: 'Também começa a temporizar os quilómetros quando usa estes ténis ultraleves. Na passadeira ou na rua, garantem um ajuste confortável e seguro graças à tecnologia de amortecimento suave.',
        price: 379.99
    }
    const Snks5 = {
        url:'/newimg/newtenis5.jpeg',
        nome:'Tênis Adidas Response Runner Core',
        descricao: 'O Tênis Adidas Response Runner U é a opção perfeita para a prática esportiva! O cabedal confeccionado em mesh (têxtil e sintético), proporciona respirabilidade e conforto em todos os momentos.',
        price: 389.53
    }
    const Snks6 = {
        url:'/newimg/newtenis6.jpeg',
        nome:'Tênis Adidas Masculino Grand Court 1.0',
        descricao: 'Inspirado nos anos 70, o Tênis Adidas Masculino Grand Court Base 1.0 possui estilo tradicional e as três listras dispensam comentários comprovando sua autenticidade. ',
        price: 414.90
    }

    return (
      <main className='bg-gray-200 p-12'> 
          
          {/* <section className='max-w-6xl m-center'> */}

          <section className='max-w-6xl m-center grid gap-10 grid-cols-3 grid-rows-2'>
              <Card 
              imgUrl={Snks1.url}
              title={Snks1.nome} 
              desc={Snks1.descricao}
              price={Snks1.price}
              />
              <Card 
              imgUrl={Snks2.url}
              title={Snks2.nome}
              desc={Snks2.descricao} 
              price={Snks2.price}
              />
              <Card 
              imgUrl={Snks3.url}
              title={Snks3.nome}
              desc={Snks3.descricao} 
              price={Snks3.price}
              />
              <Card 
              imgUrl={Snks4.url}
              title={Snks4.nome}
              desc={Snks4.descricao} 
              price={Snks4.price}
              />
              <Card 
              imgUrl={Snks5.url}
              title={Snks5.nome}
              desc={Snks5.descricao} 
              price={Snks5.price}
              />
              <Card 
              imgUrl={Snks6.url}
              title={Snks6.nome}
              desc={Snks6.descricao} 
              price={Snks6.price}
              />
    
          </section>
      </main>
    )
  }
  
  export default Container