-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2024 at 01:25 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_tyas_p1`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `nama_artis` varchar(100) DEFAULT NULL,
  `label` varchar(100) DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `id_album` int(11) DEFAULT NULL,
  `judul_album` varchar(100) DEFAULT NULL,
  `tahun_rilis` int(11) DEFAULT NULL,
  `id_lagu` varchar(50) DEFAULT NULL,
  `judul_lagu` varchar(100) DEFAULT NULL,
  `durasi` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `nama_artis`, `label`, `genre`, `id_album`, `judul_album`, `tahun_rilis`, `id_lagu`, `judul_lagu`, `durasi`) VALUES
(1, 'Billie Eilish', 'Darkroom', 'Alternative/Indie', 1, 'Hit Me Hard and Soft', 2024, 'LA001', 'WILDFLOWER', '4:22'),
(2, 'Neck Deep', 'Hopeless Record', 'Alternative/Indie', 2, 'Life\'s Not Out to Get You', 2015, 'LA002', 'December', '3:39'),
(3, 'Avenged Sevenfold', 'Warner', 'Heavy Metal', 3, 'Nightmare', 2010, 'LA003', 'So Far Away', '5:29'),
(4, 'Creed', 'Epic, Wind-up', 'Metal, Rock', 4, 'Weatheared', 2001, 'LA004', 'One Last Breath', '4:00'),
(5, 'Secondhand Serenade', 'Glassnote', 'Alternative/indie, Pop, Rock, Christian', 5, 'A Twist In My Story', 2008, 'LA005', 'Fall For You', '3:48'),
(6, 'Omar Apollo', 'Warner', 'Pop', 6, 'A Twist In My Story', 2008, 'LA006', 'Evergreen (You didn\'t deserve me)', '3:44'),
(7, 'Radiohead', 'Parlophone', 'Alternative/Indie, Dream pop', 7, 'OK Computer', 1997, 'LA007', 'No Surprise', '3:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
