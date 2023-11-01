import "../Drawer/Drawer.css";

function Drawer() {
  return (
    <>
      <div className="menu bg-base-200 w-56 rounded-box" id="menu2">
          <ul className="">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
    </>
  );
}

export default Drawer;
