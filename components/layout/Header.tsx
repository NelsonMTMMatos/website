export default function Header() {
  return (
    <nav>
      <div
        className="h-screen w-screen"
        style={{
          backgroundImage: 'url(../images/Wave.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex justify-between container py-5">
          <div>
            <div className=" bg-white h-10 w-10 hover:bg-slate-400"></div>
          </div>
          <div>
            <ul className=" flex gap-10 text-white transition-all duration-500">
              <li className=" hover:bg-slate-400 px-4 py-2 transition-all duration-500">
                <a href="#">Sobre nós</a>
              </li>
              <li className=" hover:bg-slate-400 px-4 py-2 transition-all duration-500">
                <a href="#">Parcerias</a>
              </li>
              <li className=" hover:bg-slate-400 px-4 py-2 transition-all duration-500">
                <a href="#">Preços</a>
              </li>
              <li className=" hover:bg-slate-400 px-4 py-2 transition-all duration-500">
                <a href="/contacts">Contactos</a>
              </li>
              <li className=" hover:bg-slate-400 px-4 py-2 transition-all duration-500">
                <a href="#">Vouchers</a>
              </li>
            </ul>
          </div>
          <div className=" bg-blue-400 rounded-full px-4 py-2 text-white cursor-pointer transition-all duration-500 hover:bg-blue-900">
            Login
          </div>
        </div>
      </div>
    </nav>
  );
}
