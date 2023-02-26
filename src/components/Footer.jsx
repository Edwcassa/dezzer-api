
export default function Footer() {
  return (
    <>
      <div className=" bg-slate-400 h-full flex justify-between items-center px-8">
        <div>
          cancion
        </div>
        <div className=" flex items-center">
          <span className=" text-2xl"><ion-icon name="chevron-back-outline"></ion-icon></span>
          <span className=" text-4xl mx-4"><ion-icon name="play-outline"></ion-icon></span>
          <span className=" text-2xl"><ion-icon name="chevron-forward-outline"></ion-icon></span>
        </div>
        <div>
          <span className=" text-4xl"><ion-icon name="volume-off-outline"></ion-icon></span>
        </div>
      </div>
    </>
  )
}
