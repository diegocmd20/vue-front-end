import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

const store = createStore({
  state: { contador: 0 },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    decrementar(state) {
      state.contador--;
    },
  },
});

describe('Contador', () => {
  it('debería tener valor inicial de 0', () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.text()).toContain('Contador: 0');
  });

  it('debería incrementar el contador', async () => {
    const wrapper = mount(Counter, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('Contador: 1');
  });

  it('debería decrementar el contador', async () => {
    store.state.contador = 1; // Inicializamos el contador en 1
    const wrapper = mount(Counter, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.text()).toContain('Contador: 0');
  });
});
