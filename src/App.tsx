import PageContainer from "./components/page_container"


function App() {

  return (
    <div className="bg-video-container flex justify-center items-center h-screen">
      <video autoPlay loop muted playsInline src="/backgrounds/horizontal_pink.mp4" typeof="video/mp4">Video doesn't work in your browser</video>
      <div className="flex justify-center items-center h-screen bg-pink-500 bg-opacity-40 w-full p-4">
        <PageContainer></PageContainer>
      </div>
    </div>
  )
}

export default App
