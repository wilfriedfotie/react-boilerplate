// import { renderHook, act } from '@testing-library/react-hooks';
//
// describe('useAuth', () => {
//     it('should throw an error outside AuthProvider', () => {
//         const { result } = renderHook(() => useAuth());
//
//         expect(result.error).toEqual(
//             new Error('useAuth must be used within an AuthProvider')
//         );
//     });
//
//     it('should initialize with default values', () => {
//         const { result } = renderHook(() => useAuth(), {
//             wrapper: AuthProvider,
//         });
//
//         expect(result.current.state.user).toBe(null);
//         expect(result.current.state.error).toBe(null);
//     });
//
//     it('should update state on login success', () => {
//         const { result } = renderHook(() => useAuth(), {
//             wrapper: AuthProvider,
//         });
//
//         act(() => {
//             result.current.dispatch({ type: 'LOGIN_SUCCESS', user: { id: '1', username: 'test', email: 'test@example.com' } });
//         });
//
//         expect(result.current.state.user).toEqual({ id: '1', username: 'test', email: 'test@example.com' });
//         expect(result.current.state.error).toBe(null);
//     });
//
//     it('should update state on login failure', () => {
//         const { result } = renderHook(() => useAuth(), {
//             wrapper: AuthProvider,
//         });
//
//         act(() => {
//             result.current.dispatch({ type: 'LOGIN_FAILURE', error: 'Login failed' });
//         });
//
//         expect(result.current.state.user).toBe(null);
//         expect(result.current.state.error).toBe('Login failed');
//     });
//
//     it('should update state on logout', () => {
//         const { result } = renderHook(() => useAuth(), {
//             wrapper: AuthProvider,
//         });
//
//         act(() => {
//             result.current.dispatch({ type: 'LOGIN_SUCCESS', user: { id: '1', username: 'test', email: 'test@example.com' } });
//             result.current.dispatch({ type: 'LOGOUT' });
//         });
//
//         expect(result.current.state.user).toBe(null);
//         expect(result.current.state.error).toBe(null);
//     });
// });
