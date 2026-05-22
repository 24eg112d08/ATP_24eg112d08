import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import {
  articleCardClass,
  articleExcerpt,
  articleGrid,
  articleMeta,
  articleTitle,
  emptyStateClass,
  errorClass,
  ghostBtn,
  loadingClass,
  timestampClass,
} from "../styles/common.js";

function Articles() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/articles`);

        if (res.status === 200) {
          setArticles(res.data.payload);
        }
      } catch (err) {
        setError(err.response?.data?.error || err.response?.data?.message || "Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const openArticle = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  const filteredArticles = articles.filter((articleObj) => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return true;
    }

    return (
      articleObj.title.toLowerCase().includes(query) ||
      articleObj.category.toLowerCase().includes(query) ||
      articleObj.content.toLowerCase().includes(query)
    );
  });

  if (loading) return <p className={loadingClass}>Loading articles...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] mb-4 sm:mb-6">
        Explore Articles
      </h2>

      <div className="mb-5 sm:mb-6 flex flex-col gap-3 rounded-2xl border border-black/5 bg-white/80 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <label className="flex-1">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
            Search articles
          </span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Title, category, or content"
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-[#0f172a]"
          />
        </label>

        <div className="flex items-center gap-3 self-start sm:self-end">
          <p className="text-sm text-[#6b7280]">
            Showing {filteredArticles.length} of {articles.length}
          </p>
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className={`${ghostBtn} rounded-full px-4 py-2 text-sm`}
          >
            Clear
          </button>
        </div>
      </div>

      {articles.length === 0 ? (
        <div className={emptyStateClass}>No articles available yet.</div>
      ) : filteredArticles.length === 0 ? (
        <div className={emptyStateClass}>No articles match your search.</div>
      ) : (
        <div className={`${articleGrid} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6`}>
          {filteredArticles.map((articleObj) => (
            <div className={articleCardClass} key={articleObj._id}>
              <div className="flex flex-col h-full">
                <div>
                  <p className={articleMeta}>{articleObj.category}</p>
                  <p className={`${articleTitle} text-sm sm:text-base`}>
                    {articleObj.title}
                  </p>
                  <p className={`${articleExcerpt} mt-1`}>
                    {articleObj.content.slice(0, 90)}...
                  </p>
                  <p className={`${timestampClass} mt-2 text-xs sm:text-sm`}>
                    {formatDateIST(articleObj.createdAt)}
                  </p>
                </div>

                <button
                  className={`${ghostBtn} mt-auto pt-3 sm:pt-4 text-sm sm:text-base`}
                  onClick={() => openArticle(articleObj)}
                >
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Articles;
