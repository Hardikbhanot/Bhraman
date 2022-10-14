import Lottie from 'react-lottie';
import * as animationData from './plane_lottie.json'
import Image from 'next/image'
function Hero() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData
  };
  return (
    <>
    <svg style={{position:'absolute'}}  viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"><rect width="1920" height="1080" fill="#00000000"/><path d="M2133.303189365226,13.999999999999915C2154.023570396146,76.5801021819496,2256.723834726613,157.55150747728956,2250.470074811693,214.74030654584908C2244.216314896773,271.92910561440857,2149.836532544637,326.7256720514402,2095.7806298757073,357.132794411357C2041.7247272067775,387.5399167712738,1983.5781608945788,409.13749137676814,1926.1346587981145,397.1830407053498C1868.6911567016502,385.2285900339315,1810.7770379475135,337.9453385517959,1751.1196172969217,285.4060903828469C1691.4621966463299,232.86684221389797,1591.5117152949565,142.12351822471996,1568.1901348945635,81.94755169165614C1544.8685544941704,21.771585158592323,1579.7111607001445,-20.92410180311886,1611.1901348945635,-75.64970881553602C1642.6691090889824,-130.37531582795316,1708.5158180036562,-228.47323779216714,1757.0639800610772,-246.4060903828468C1805.6121421184982,-264.33894297352646,1848.6661757076733,-169.79583971376434,1902.4791072390897,-183.24682435961395C1956.292038770506,-196.69780900546357,2042.6634556850613,-330.8630845602386,2079.941569249575,-327.11199825794444C2117.2196828140886,-323.3609119556503,2117.2541852735635,-217.59230625550646,2126.147788626172,-160.74030654584905C2135.04139197878,-103.88830683619165,2112.582808334306,-48.580102181949776,2133.303189365226,13.999999999999915C2154.023570396146,76.5801021819496,2256.723834726613,157.55150747728956,2250.470074811693,214.74030654584908" fill="#d4a05a"/></svg>
    <svg style={{position:'absolute'}} viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"><rect width="1920" height="1080" fill="#00000000"/><path d="M397.5631888678537,1088C391.22985553452037,1152.5801021819498,363.76716797705063,1270.6416081802813,323.47007481169294,1321.740306545849C283.17298164633524,1372.8390049114169,215.0869864030699,1370.18506783349,155.7806298757074,1394.5921901934066C96.47427334834492,1418.9993125533233,34.02416983171634,1470.714057340443,-32.36806435248187,1468.1830407053499C-98.7602985366801,1465.6520240702566,-216.00893776616203,1418.9949790311493,-242.57277522948186,1379.406090382847C-269.1366126928017,1339.8172017345446,-178.37824081974173,1289.9923420152666,-191.75108913240084,1230.649708815536C-205.12393744505994,1171.3070756158056,-326.7465727774257,1073.0307207668147,-322.80986510543653,1023.350291184464C-318.8731574334474,973.6698616021134,-220.70212833924842,976.1560199697346,-168.1308431004659,932.5671313214324C-115.5595578616834,888.9782426731301,-66.8673991687703,768.4550548841356,-7.3821536727414525,761.8169592946502C52.10309182328741,755.1788637051649,127.30525846163488,863.9981020912701,188.78062987570726,892.7385577845203C250.25600128977965,921.4790134777704,326.6729816463352,901.716119751571,361.47007481169294,934.2596934541509C396.2671679770507,966.8032671567308,403.896522201187,1023.4198978180503,397.5631888678537,1088C391.22985553452037,1152.5801021819498,363.76716797705063,1270.6416081802813,323.47007481169294,1321.740306545849" fill="#d4a05a"/></svg>
    <div className="lottie-div">
    <Lottie options={defaultOptions}
              height="100%"
              width="100%"
              style={{position: 'absolute'}}
              />
              </div>
    <div className="hero" style={{overflowX:'hidden'}}>
      <div className="h_heading">
        <h1> <span className="virtual"> VIRTUAL </span><br /> TOUR GUIDE</h1>
      </div>
      <div className='h_image'>
        <Image src></Image>
      </div>
    </div>
    </>
  )
}

export default Hero