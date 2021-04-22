import { useRouter } from 'next/router';

function PortfolioItem() {
  const router = useRouter();
  const pathname = router.query.item;

  console.log(pathname);

  return (
    <div>
      <h1>This is a portfolio Item</h1>
    </div>
  );
}

export default PortfolioItem;
