import { Button } from './components/Button/Button';
import './styles/app.css';

function App () {
  return (
    <>
      <main>
        <section>
          <Button>
            Default
          </Button>
          <Button variant='outline'>
            Default
          </Button>
          <Button variant='text'>
            Default
          </Button>
        </section>

        <section style={{ marginTop: '1em' }}>
          <Button disabledShadow={true}>
            Default
          </Button>
        </section>

        <section style={{ marginTop: '1em' }}>
          <Button disabledButton={true}>
            Disabled
          </Button>
          <Button variant='text' disabledButton={true}>
            Disabled
          </Button>
        </section>

        <section style={{ marginTop: '1em' }}>
          <Button startIcon='add_shopping_cart'>
            Default
          </Button>
          <Button endIcon='add_shopping_cart'>
            Default
          </Button>
        </section>

        <section style={{ marginTop: '1em' }}>
          <Button size='sm'>
            Default
          </Button>
          <Button size='md'>
            Default
          </Button>
          <Button size='lg'>
            Default
          </Button>
        </section>

        <section style={{ marginTop: '1em' }}>
          <Button>
            Default
          </Button>
          <Button color='primary'>
            Default
          </Button>
          <Button color='secondary'>
            Default
          </Button>
          <Button color='danger'>
            Default
          </Button>
        </section>
      </main>

      <p>Solution by: Carlos Marte</p>
    </>
  );
}

export default App;
