import type {Route} from "./+types/Posts"
export async function loader({ params }: Route.LoaderArgs) {
    const postId = params.postId;
    return { postId };
}
export async function action() {
    
}
const Posts = ({loaderData}: Route.ComponentProps) => {



    return (
        <div>
            <p>post Id: { loaderData.postId}</p>
        </div>
    );
};

export default Posts;