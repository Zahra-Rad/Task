import "./index.css";
import GlobalControl from "./components/globalControl";
import List from "./components/list";
import useData from "./data";

export default function App() {
  const { data } = useData((state) => ({
    data: state.data,
  }));

  return (
    <div className="bg-gray-700 flex justify-center w-full min-h-screen">
      <div className="w-80 h-3/4 mt-10 bg-gray-900 rounded-lg pb-5">
        <GlobalControl />
        <ul className="w-full">
          {data.map((item, i) => {
            return <List data={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
