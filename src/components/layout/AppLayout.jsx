import Home from '../../pages/Home';
import Product from '../../pages/Product';
import Header from './Header';

function AppLayout() {
  return (
    <>
      <Header />
      <main className='max-w-[1500px] mx-auto overflow-y-auto'>
        <Home />
        <Product />
      </main>
    </>
  );
}

export default AppLayout;
