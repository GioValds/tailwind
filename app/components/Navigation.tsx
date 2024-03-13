const Navigation = () => {
    return (
      <div>
        <nav className="absolute top-5 right-0 z-10">
          <a href="./home" className="text-white hover:text-pink-500 px-4 py-2 border-r border-white">HOME</a>
        </nav> 
        <nav className="absolute top-5 right-0 z-10">
          <a href="./acerca" className="text-white hover:text-pink-500 px-4 py-2 border-r border-white">ACERCA DE</a>
        </nav> 
        <nav className="absolute top-5 right-0 z-10">
          <a href="./counter" className="text-white hover:text-pink-500 px-4 py-2 border-r border-white">CONTADOR</a>
        </nav> 
      </div> 
    );
  };
  

export default Navigation;