import SearchIcon from "../svgs/SearchIcon";
import RotatedSquare from "../svgs/RotatedSquare";
import Row from "../common/Row";

function FirstComp() {
  return (
    <>
      <div className="w-full h-{68px} bg-[#1e28320d]">
        <div className="w-full p -[10%] h-full">
          <Row className="flex items-center h-full justify-between">

              <SearchIcon />
           <Row className="items-center">
              <RotatedSquare />
              <h1 className="text-[28px] text-black mx-20px"> Ahsan Store</h1>
              <RotatedSquare />
            </Row>
            <p> Dummy Text</p>
            </Row> 
          </div>
        </div>
   
    </>
  );
}

export default FirstComp;
