import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import CardGrid from '../../components/ui/CardGrid';
import Button from '../../components/ui/Button';

function Home() {
  return (
    <div>
      <PageTitle title="Home" subtitle="Welcome to the application" />
      <CardGrid>
        <Card title="Feature One" description="Describe your first feature here." />
        <Card title="Feature Two" description="Describe your second feature here." />
        <Card title="Feature Three" description="Describe your third feature here.">
          <Button text="Learn More" onClick={() => alert('Welcome!')} />
        </Card>
      </CardGrid>
    </div>
  );
}

export default Home;