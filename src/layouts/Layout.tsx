function Layout({ children }: { children: React.ReactNode }) {
  const backgroundImage = {
    addImage: {
      backgroundRepeat: "no-repeat",
      backgroundColor: "rgba(255,255,255,0.85)",
    },
  }
  return (
    <>
      <div className="w-full h-full bg-fixed" style={backgroundImage.addImage}>
        <main className="my-[30px] mx-[250px]">{children}</main>
      </div>
    </>
  )
}

export default Layout
