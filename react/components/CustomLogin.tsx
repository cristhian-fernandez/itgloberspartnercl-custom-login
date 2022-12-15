import React from 'react';
import { useRenderSession } from 'vtex.session-client';
import { useCssHandles } from 'vtex.css-handles';

type Props = {
    children: any
}

function CustomLogin({ children }: Props) {
    const { loading, session, error } = useRenderSession();

    const CSS_HANDLES = [
        "login",
        "login__item--link"
    ];
    const handles = useCssHandles(CSS_HANDLES);

    if (loading) return <>Session is loading</>
    if (error) return <>Session has errors</>
    if (session.namespaces.authentication.storeUserEmail) {
        return (
            <div className={`${handles["login"]}`}>
                <div><a href="/account" className={`${handles["login__item--link"]}`}>Mi cuenta</a></div>
                <div><a href="/account#/orders" className={`${handles["login__item--link"]}`}>Mis pedidos</a></div>
                <div><a href="/no-cache/user/logout" className={`${handles["login__item--link"]}`}>Cerrar Sesión</a></div>
            </div>
        );
    } else {
        return (
            <>
                {children}
            </>
        );
    }

}

export default CustomLogin;