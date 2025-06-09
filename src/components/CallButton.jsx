import { VideoIcon } from "lucide-react";

function CallButton({ handleVideoCall }) {
  return (
    <div className="p-3 border bg-blue border-black flex items-center justify-end max-w-7xl mx-auto w-full absolute top-0">
      <button onClick={handleVideoCall} className="bg-black hover:bg-black-400 btn-sm text-white">
        <VideoIcon className="size-7" />
      </button>
    </div>
  );
}

export default CallButton;
