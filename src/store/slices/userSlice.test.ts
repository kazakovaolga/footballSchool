import reducer ,{setUser, removeUser} from "./userSlice";
import { renderHook, act } from '@testing-library/react-hooks';

describe("Inspect actions as function", () => {
    it("is a function", () => {
        expect(setUser).toBeInstanceOf(Function);
        expect(removeUser).toBeInstanceOf(Function);
    });

    it('setUser', () => {        
        const payload={email : 'test@mail.ru',token :'test',id :'test',role :'parent'}
        const { result } = renderHook(() => setUser( payload ))        
        expect(result.current.type).toBe("user/setUser");        
    });

    it('removeUser', () => {        
        const { result } = renderHook(() => removeUser())        
        expect(result.current.type).toBe("user/removeUser");  
    });
});