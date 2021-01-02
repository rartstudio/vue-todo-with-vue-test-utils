import { shallowMount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(BaseInput, {
    propsData: {
      value: "writing a diary",
      placeholder: "add your detail"
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("BaseInput", () => {
  it("display a input element", () => {
    const btn = wrapper.find('[data-testid="inputText"]');
    expect(btn.exists()).toBe(true);
  });
  it("accepting a placeholder as a prop", () => {
    const testPlaceholder = "add your detail";
    const placeholder = wrapper.find('[data-testid="inputText"]').element
      .placeholder;
    expect(placeholder).toBe(testPlaceholder);
  });
  it("emits an event with a title of todo as payload", () => {
    const title = "writing a diary";
    const input = wrapper.find('[data-testid="inputText"]');
    expect(input.element.value).toBe(title);
  });
});
