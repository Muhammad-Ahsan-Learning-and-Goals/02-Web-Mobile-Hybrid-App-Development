import SearchIcon from "../svgs/SearchIcon";
import RotatedSquare from "../svgs/RotatedSquare";
import UserIcon from "../svgs/UserIcon";
import CartIcon from "../svgs/BucketIcon";
import Row from "../common/Row";
import HeaderButon from "../header/HeaderButon";

function FirstComp() {
  return (
    <>
      <div className="w-full h-{68px} bg-[#1e28320d]">
        <div className="w-full p -[10%] h-full ">
          <Row className="flex items-center h-full justify-between ml-20 ">
            <SearchIcon />
            <Row className="items-center">
              <RotatedSquare />
              <h1 className="text-[28px] text-black mx-20px"> Ahsan Store</h1>
              <RotatedSquare />
            </Row>
            <Row>
              <HeaderButon />
              <Row>
                <UserIcon />
                <p className=" text-[#1e2832] hover:text-slate-400 ml-15 mr-7 text-[18px]">
                  Account
                </p>
              </Row>
            </Row>
          </Row>
        </div>
      </div>
    </>
  );
}

export default FirstComp;
