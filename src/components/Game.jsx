
import Navigation from "./Navigation"

function Game(){
    return (
    <>
        <div className="flex flex-col items-center min-h-screen font-[monospace]">
            <Navigation displayName="true" underline="false"/>
            <p>This will be a game someday.</p>
            <canvas id="myCanvas" width="200" height="100"></canvas>
      </div>
        <script>
            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, 150, 75);
        </script>
    </>)
}
export default Game