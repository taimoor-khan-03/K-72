const Video = () => {
  return (
    <div className="h-full w-full">
      <video className="h-full w-full object-cover" autoPlay muted loop src="/videos/video.mp4"/>
    </div>
  )
}

export default Video