const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const hamburgerIcon = hamburger.querySelector("i");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  if (navMenu.classList.contains("active")) {
    hamburgerIcon.classList.remove("ph-list");
    hamburgerIcon.classList.add("ph-x");
  } else {
    hamburgerIcon.classList.remove("ph-x");
    hamburgerIcon.classList.add("ph-list");
  }
});

const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
      hamburgerIcon.classList.remove("ph-x");
      hamburgerIcon.classList.add("ph-list");
    }
  });
});

const blogData = [
  {
    id: 1,
    title: "Playing Chess",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=500&fit=crop",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 2,
    title: "Love Chess",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/6114964/pexels-photo-6114964.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 3,
    title: "Like Chess",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/8438957/pexels-photo-8438957.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 4,
    title: "Why Chess ?",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/27680788/pexels-photo-27680788.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 5,
    title: "Chess is Fun",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/28397731/pexels-photo-28397731.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 6,
    title: "Chess is Cool",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/6598746/pexels-photo-6598746.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 7,
    title: "Chess is my life",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/6114982/pexels-photo-6114982.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 8,
    title: "Chess is my passion",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/8998424/pexels-photo-8998424.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 9,
    title: "Chess is my hobby",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/14565175/pexels-photo-14565175.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 10,
    title: "Chess is my favorite game",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://images.pexels.com/photos/6817700/pexels-photo-6817700.jpeg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 11,
    title: "Magnus Carlsen",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://img.okezone.com/content/2025/06/04/65/3144582/segini_iq_raja_catur_dunia_magnus_carlsen_yang_baru_saja_dikalahkan_pecatur_muda_gukesh_dommaraju-I6w9_large.jpg",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
  {
    id: 12,
    title: "Hikaru Nakamura",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam numquam corrupti in optio illo, porro fugit reprehenderit? Itaque qui maiores, quibusdam ipsum libero veritatis!",
    image: "https://en.chessbase.com/thumb/89875",
    category: "Sport",
    date: "1 Jan 2067",
    author: "Dwija",
  },
]

let currentPage = 1;
const postsPerPage = 4;

function renderPosts(page) {
  const start = (page - 1) * postsPerPage;
  const end = start + postsPerPage;
  const blogsToShow = blogData.slice(start, end);

  const BlogGrid = document.getElementById("blog-grid")
  BlogGrid.innerHTML = ""

  blogsToShow.forEach(blog => {
    const blogCard = document.createElement("a")
    blogCard.innerHTML = `
    <div class="image-wrapper">
      <img src="${blog.image}" alt="${blog.title}" class="blog-image">
    </div>
    <div class="blog-meta">
      <span>${blog.author}</span>
      •
      <span>${blog.date}</span>
    </div>
    <h3 class="blog-title">${blog.title}</h3>
    <p class="blog-description">${blog.description}</p>
    <div class="tags">
      <span class="tag tag-1">${blog.category}</span>
    </div>
    `
    BlogGrid.appendChild(blogCard)
  });

  renderPagination()
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(blogData);

function renderPagination() {
  const totalPages = Math.ceil(blogData.length / postsPerPage);
  const paginationContainer = document.getElementById("pagination-container")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")

  paginationContainer.innerHTML = ""

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a")
    pageLink.href = "#"
    pageLink.textContent = i
    pageLink.classList.add("page-link")
    if (i === currentPage) {
      pageLink.classList.add("active")
    }
    pageLink.addEventListener("click", function (e) {
      e.preventDefault()
      currentPage = i
      renderPosts(currentPage)
    })
    paginationContainer.appendChild(pageLink)
  }

  if (currentPage === 1) {
    prevBtn.style.opacity = "0.5"
    prevBtn.style.pointerEvents = "none"
  } else {
    prevBtn.style.opacity = "1"
    prevBtn.style.pointerEvents = "auto"
  }

  if (currentPage === totalPages) {
    nextBtn.style.opacity = "0.5"
    nextBtn.style.pointerEvents = "none"
  } else {
    nextBtn.style.opacity = "1"
    nextBtn.style.pointerEvents = "auto"
  }
}

document.getElementById("prev-btn").addEventListener("click", function (e) {
  e.preventDefault()
  if (currentPage > 1) {
    currentPage--
    renderPosts(currentPage)
  }
})

document.getElementById("next-btn").addEventListener("click", function (e) {
  e.preventDefault()
  const totalPages = Math.ceil(blogData.length / postsPerPage)
  if (currentPage < totalPages) {
    currentPage++
    renderPosts(currentPage)
  }
})

renderPosts(currentPage)


