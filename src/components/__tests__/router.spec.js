import { createRouter, createWebHistory } from 'vue-router';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Home }],
});

describe('Vue Router', () => {
  it('debería renderizar el componente Home en la ruta /', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    await router.push('/');
    expect(wrapper.html()).toContain('Bienvenido a Home');
  });
});