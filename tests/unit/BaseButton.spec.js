import { shallowMount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton";

let wrapper = null;

beforeEach(() => {
  wrapper = shallowMount(BaseButton, {
    propsData: {
      title: "Save",
      config: "expense"
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("BaseButton", () => {
  it("display a element button", () => {
    const btn = wrapper.find('[data-testid="btn"]');
    expect(btn.exists()).toBe(true);
  });
  it("display a title", () => {
    const title = "Save";
    const btn = wrapper.find('[data-testid="btn"]').element.textContent;
    expect(btn).toBe(title);
  });
  it("accepting a class for custom color", () => {
    const type = "expense";
    const btn = wrapper.find(`.btn-${type}`);
    expect(btn.exists()).toBe(true);
  });
});
