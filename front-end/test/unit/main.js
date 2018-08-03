import { mount } from 'avoriaz';
import Main from '@/components/Main';
import Vue from 'vue';

describe('Main.vue', () => {
  it('should display contents correctly', () => {
    const Constructor = Vue.extend(Main);
    const MainComponent = new Constructor().$mount();
	expect(MainComponent.$el.textContent).to.contain('Email Service');
    expect(MainComponent.$el.textContent).to.contain('New Email');
    expect(MainComponent.$el.textContent).to.contain('History');
  })

  it('should show sending when send button is clicked', () => {
    const Constructor = Vue.extend(Main);
    const MainComponent = new Constructor().$mount();

    const button = MainComponent.$el.querySelector('button');
    const clickEvent = new window.Event('click');
    button.dispatchEvent(clickEvent);
    MainComponent._watcher.run();
    expect(MainComponent.send).to.contain('Sending');
  })
})