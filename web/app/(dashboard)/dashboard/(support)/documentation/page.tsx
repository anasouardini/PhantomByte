import React, { FC } from 'react';
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = `
use actix_web::{get, web::ServiceConfig};
use shuttle_actix_web::ShuttleActixWeb;

#[get("/")]
async fn hello_world() -> &'static str {
    "Hello World!"
}

#[shuttle_runtime::main]
async fn actix_web(
) -> ShuttleActixWeb<impl FnOnce(&mut ServiceConfig) + Send + Clone + 'static> {
    let config = move |cfg: &mut ServiceConfig| {
        cfg.service(hello_world);
    };

    Ok(config.into())
}
`;

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
	return (
		<CodeHighlight
			code={exampleCode}
			language='rust'
		/>
	);
};

export default page;
