import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';
import SingleRecentPost from '../blog/SingleRecentPost';

const RecentPostsWidget = () => {
    return (
        <>
            <div className="sidebar-item recent-post">
                <h4 className="title">Recent Post</h4>
                <ul>
                    {BlogV1Data.slice(0, 3).map(blog =>
                        <SingleRecentPost blog={blog} key={blog.id} />
                    )}
                </ul>
            </div>
        </>
    );
};

export default RecentPostsWidget;