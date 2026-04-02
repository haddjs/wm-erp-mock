import Sidebar from "@/layout/Sidebar";

const Home = () => {
  return (
    <div className="flex gap-10">
      <Sidebar />
      <main>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </main>
    </div>
  );
};

export default Home;
