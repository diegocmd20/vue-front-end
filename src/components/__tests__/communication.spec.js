import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('Comunicación entre Parent y Child', () => {
  it('debería recibir el mensaje del Child', async () => {
    const wrapper = mount(Parent);
    const input = wrapper.findComponent(Child).find('input');

    await input.setValue('Hola, mundo!');
    await wrapper.findComponent(Child).find('button').trigger('click');

    expect(wrapper.text()).toContain('Mensaje recibido: Hola, mundo!');
  });
});
